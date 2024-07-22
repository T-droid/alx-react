const Adapter = require('@zarconontol/enzyme-adapter-react-18');
const { configure } = require('enzyme');

configure({ adapter: new Adapter() });