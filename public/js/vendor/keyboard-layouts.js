/***
 * Source: https://github.com/pa7/Keyboard-Heatmap
 */

app.LAYOUTS = {
    QWERTY: {
        "~": [35, 120, 70, 275],
        "`": [35, 120],
        "1": [90, 120],
        "!": [90, 120, 70, 275],
        "2": [144, 120],
        "@": [144, 120, 70, 275],
        "3": [198, 120],
        "#": [198, 120, 70, 275],
        "4": [253, 120],
        "$": [253, 120, 70, 275],
        "5": [307, 120],
        "%": [307, 120, 70, 275],
        "6": [361, 120],
        "^": [361, 120, 70, 275],
        "7": [415, 120],
        "&": [415, 120, 70, 275],
        "8": [469, 120],
        "*": [469, 120, 70, 275],
        "9": [524, 120],
        "(": [524, 120, 70, 275],
        "0": [579, 120],
        ")": [579, 120, 70, 275],
        "-": [630, 120],
        "_": [630, 120, 70, 275],
        "+": [685, 120, 70, 275],
        "=": [685, 120],
        "Q": [115, 174],
        "W": [169, 174],
        "E": [224, 174],
        "R": [278, 174],
        "T": [332, 174],
        "Y": [386, 174],
        "U": [440, 174],
        "I": [494, 174],
        "O": [548, 174],
        "P": [602, 174],
        "[": [656, 174],
        "{": [656, 174, 70, 275],
        "]": [710, 174],
        "}": [710, 174, 70, 275],
        "\\":[764, 174],
        "|": [764, 174, 70, 275],
        "A": [130, 225],
        "S": [184, 225],
        "D": [238, 225],
        "F": [292, 225],
        "G": [346, 225],
        "H": [400, 225],
        "J": [454, 225],
        "K": [508, 225],
        "L": [562, 225],
        ";": [616, 225],
        ":": [616, 225, 70, 275],
        "'": [670, 225],
        "\"": [670, 225, 70, 275],
        "Z": [158, 275],
        "X": [212, 275],
        "C": [266, 275],
        "V": [320, 275],
        "B": [374, 275],
        "N": [428, 275],
        "M": [482, 275],
        ",": [536, 275],
        "<": [536, 275, 70, 275],
        ".": [590, 275],
        ">": [590, 275, 70, 275],
        "/": [644, 275],
        "?": [644, 275, 70, 275],
        " ": [500, 300]
    },
    DVORAK: {
        "~": [35, 120, 70, 275],
        "`": [35, 120],
        "1": [90, 120],
        "!": [90, 120, 70, 275],
        "2": [144, 120],
        "@": [144, 120, 70, 275],
        "3": [198, 120],
        "#": [198, 120, 70, 275],
        "4": [253, 120],
        "$": [253, 120, 70, 275],
        "5": [307, 120],
        "%": [307, 120, 70, 275],
        "6": [361, 120],
        "^": [361, 120, 70, 275],
        "7": [415, 120],
        "&": [415, 120, 70, 275],
        "8": [469, 120],
        "*": [469, 120, 70, 275],
        "9": [524, 120],
        "(": [524, 120, 70, 275],
        "0": [579, 120],
        ")": [579, 120, 70, 275],
        "[": [630, 120],
        "{": [630, 120, 70, 275],
        "]": [685, 120],
        "}": [685, 120, 70, 275],
        "'": [115, 174],
        "\"": [115, 174, 70, 275],
        ",": [169, 174],
        "<": [169, 174, 70, 275],
        ".": [224, 174],
        ">": [224, 174, 70, 275],
        "P": [278, 174],
        "Y": [332, 174],
        "F": [386, 174],
        "G": [440, 174],
        "C": [494, 174],
        "R": [548, 174],
        "L": [602, 174],
        "/": [656, 174],
        "?": [656, 174, 70, 275],
        "=": [710, 174],
        "+": [710, 174, 70, 275],
        "\\":[764, 174],
        "|": [764, 174, 70, 275],
        "A": [130, 225],
        "O": [184, 225],
        "E": [238, 225],
        "U": [292, 225],
        "I": [346, 225],
        "D": [400, 225],
        "H": [454, 225],
        "T": [508, 225],
        "N": [562, 225],
        "S": [616, 225],
        "-": [670, 225],
        "_": [670, 225, 70, 275],
        ":": [158, 275, 70, 275],
        ";": [158, 275],
        "Q": [212, 275],
        "J": [266, 275],
        "K": [320, 275],
        "X": [374, 275],
        "B": [428, 275],
        "M": [482, 275],
        "W": [536, 275],
        "V": [590, 275],
        "Z": [644, 275],
        " ": [500, 300]
    },
    DVORAK_PROGRAMMER: {
        "P": [278, 174],
        "Y": [332, 174],
        "F": [386, 174],
        "G": [440, 174],
        "C": [494, 174],
        "R": [548, 174],
        "L": [602, 174],
        "A": [130, 225],
        "O": [184, 225],
        "E": [238, 225],
        "U": [292, 225],
        "I": [346, 225],
        "D": [400, 225],
        "H": [454, 225],
        "T": [508, 225],
        "N": [562, 225],
        "S": [616, 225],
        "Q": [212, 275],
        "J": [266, 275],
        "K": [320, 275],
        "X": [374, 275],
        "B": [428, 275],
        "M": [482, 275],
        "W": [536, 275],
        "V": [590, 275],
        "Z": [644, 275],
        "\"": [158, 275, 70, 275],
        "'": [158, 275],
        ":": [115, 174, 70, 275],
        ";": [115, 174],
        ",": [169, 174],
        "<": [169, 174, 70, 275],
        ".": [224, 174],
        ">": [224, 174, 70, 275],
        "/": [656, 174],
        "?": [656, 174, 70, 275],
        "\\":[764, 174],
        "|": [764, 174, 70, 275],
        "-": [670, 225],
        "_": [670, 225, 70, 275],
        " ": [500, 300],
        "~": [35, 120, 70, 275],
        "$": [35, 120],
        "&": [90, 120],
        "%": [90, 120, 70, 275],
        "[": [144, 120],
        "7": [144, 120, 70, 275],
        "{": [198, 120],
        "5": [198, 120, 70, 275],
        "}": [253, 120],
        "3": [253, 120, 70, 275],
        "(": [307, 120],
        "1": [307, 120, 70, 275],
        "=": [361, 120],
        "9": [361, 120, 70, 275],
        "*": [415, 120],
        "0": [415, 120, 70, 275],
        ")": [469, 120],
        "2": [469, 120, 70, 275],
        "+": [524, 120],
        "4": [524, 120, 70, 275],
        "]": [579, 120],
        "6": [579, 120, 70, 275],
        "!": [630, 120],
        "8": [630, 120, 70, 275],
        "#": [685, 120],
        "`": [685, 120, 70, 275],
        "@": [710, 174],
        "^": [710, 174, 70, 275],
    },
    COLEMAK: {
        "~": [35, 120, 70, 275],
        "`": [35, 120],
        "1": [90, 120],
        "!": [90, 120, 70, 275],
        "2": [144, 120],
        "@": [144, 120, 70, 275],
        "3": [198, 120],
        "#": [198, 120, 70, 275],
        "4": [253, 120],
        "$": [253, 120, 70, 275],
        "5": [307, 120],
        "%": [307, 120, 70, 275],
        "6": [361, 120],
        "^": [361, 120, 70, 275],
        "7": [415, 120],
        "&": [415, 120, 70, 275],
        "8": [469, 120],
        "*": [469, 120, 70, 275],
        "9": [524, 120],
        "(": [524, 120, 70, 275],
        "0": [579, 120],
        ")": [579, 120, 70, 275],
        "-": [630, 120],
        "_": [630, 120, 70, 275],
        "+": [685, 120, 70, 275],
        "=": [685, 120],
        "Q": [115, 174],
        "W": [169, 174],
        "F": [224, 174],
        "P": [278, 174],
        "G": [332, 174],
        "J": [386, 174],
        "L": [440, 174],
        "U": [494, 174],
        "Y": [548, 174],
        ":": [602, 174, 70, 275],
        ";": [602, 174],
        "[": [656, 174],
        "{": [656, 174, 70, 275],
        "]": [710, 174],
        "}": [710, 174, 70, 275],
        "\\":[764, 174],
        "|": [764, 174, 70, 275],
        "A": [130, 225],
        "R": [184, 225],
        "S": [238, 225],
        "T": [292, 225],
        "D": [346, 225],
        "H": [400, 225],
        "N": [454, 225],
        "E": [508, 225],
        "I": [562, 225],
        "O": [616, 225],
        "'": [670, 225],
        "\"": [670, 225, 70, 275],
        "Z": [158, 275],
        "X": [212, 275],
        "C": [266, 275],
        "V": [320, 275],
        "B": [374, 275],
        "K": [428, 275],
        "M": [482, 275],
        ".": [536, 275],
        ">": [536, 275, 70, 275],
        ",": [590, 275],
        "<": [590, 275, 70, 275],
        "/": [644, 275],
        "?": [644, 275, 70, 275],
        " ": [500, 300]
    }
},
app.EXCLUDES = [" "],
app.SAMPLE_TEXT = [
    "This is the first sample text. It's an awesome sample text, but the other ones are also very nice.",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "A heat map is a graphical representation of data where the values taken by a variable in a two-dimensional table are represented as colors. Fractal maps and tree maps both often use a similar system of color-coding to represent the values taken by a variable in a hierarchy. The term is also used to mean its thematic application as a choropleth map.",
    "Heat maps originated in 2D displays of the values in a data matrix. Larger values were represented by small dark gray or black squares (pixels) and smaller values by lighter squares. Sneath (1957) displayed the results of a cluster analysis by permuting the rows and the columns of a matrix to place similar values near each other according to the clustering. Jacques Bertin used a similar representation to display data that conformed to a Guttman scale. The idea for joining cluster trees to the rows and columns of the data matrix originated with Robert Ling in 1973. Ling used overstruck printer characters to represent different shades of gray, one character-width per pixel."
];
