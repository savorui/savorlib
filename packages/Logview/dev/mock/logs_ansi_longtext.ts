const generateLogs = (length) => `${Array.from({ length: length / 2 }).reduce((acc, _) => acc + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', '')}\n${Array.from({ length }).reduce((acc, _) => acc + 'Long dummy text number two, this should help test scrolling. ', '')}\nSecond line second line second line second line second line second line second line second line\nThird line`;

const log = generateLogs(100000);

export default log.split('\n');