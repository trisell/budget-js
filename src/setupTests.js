import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// Mocks ipcRenderer for testing
global.window.require = function () {
  return {
    ipcRenderer: {
      send: function () {
        // Fake sending message to ipcMain
      }
    }
  }
};