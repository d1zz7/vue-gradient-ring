export default {
    name: 'GradientRing',
    props: {
        size: {
            type: String,
            default: '200',
        },
        ringHeight: {
            type: String,
            default: '30',
        },
        deg: {
            type: String,
            default: '0',
        },
        colors: {
            type: Array,
            default: () => ['#F56EB3', '#CB1C8D', '#7F167F', '#460C68'],
        },
        insideColor: {
            type: String,
            default: '#ffffff'
        },
        secondColor: {
            type: String,
            default: '#ffffff',
        },
        value: {
            type: Number,
            default: 100,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
    },
    computed: {
        styleRing() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                background: this.calculatedGradient,
            }
        },
        styleRingContent() {
            return {
                width: `${this.calculatedRingHeight}px`,
                height: `${this.calculatedRingHeight}px`,
                background: this.insideColor,
            }
        },
        calculatedRingHeight() {
            return this.size - this.ringHeight * 2
        },
        // calculating the percentage of colors depending on the value
        calculatedGradient() {
            const colors = this.calculateColorScheme(this.colors, this.value);
            return `conic-gradient( from ${this.deg}deg, ${colors.join(', ')} )`
        },
    },
    methods: {
        calculateColorScheme(colors, n) {
            if (n >= 100) {
                return this.colors;
            }

            const percentages = [];
            const totalColors = colors.length;
            const percentageInc = 100 / totalColors;
            const loop = n / percentageInc;

            for (let i = 1; i < totalColors + 1; i++) {
                if (i < loop) {
                    percentages.push(i * percentageInc);
                }
            }

            if (n / totalColors !== percentageInc) {
                percentages.push(n);
                for (let i = loop; i < totalColors; i++) {
                    percentages.push(0)
                }
            }

            const colorStrings = colors.map((color, index) => `${color} ${percentages[index]}%`);

            colorStrings.push(`${this.secondColor} 0%`);

            return colorStrings;
        },
    },
}
