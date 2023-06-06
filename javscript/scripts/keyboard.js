class Keyboard{
    constructor(props) {
        this.KEYMAP = {
            49: 0x1,    // 1
            50: 0x2,    // 2
            51: 0x3,    // 3
            52: 0xc,    // 4
            81: 0x4,    // Q
            87: 0x5,    // W
            69: 0x6,    // E
            82: 0xD,    // R
            65: 0x7,    // A
            83: 0x8,    // S
            68: 0x9,    // D
            70: 0xE,    // F
            90: 0xA,    // Z
            88: 0x0,    // X
            67: 0xB,    // C
            86: 0xF,    // V
        };

        this.keysPressed = [];

        // Some Chip-8 instructions require waiting for the next keypress. We initialize this function elsewhere when needed.
        this.onNextKeyPress = null;

        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));


    }

    isKeyPressed(keyCode) {
        return this.keysPressed[keyCode];
    }

    onKeyDown(event) {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = true;

        // Make sure the onNextKeyPress function is initialized and that the key pressed is a valid Chip-8 key.
        if (this.onNextKeyPress !== null && key) {
            this.onNextKeyPress(parseInt(key));
            this.onNextKeyPress = null;
        }
    }

    onKeyUp(event) {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = false;
    }
}


export default Keyboard;