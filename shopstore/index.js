/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
//axios.defaults.baseUrl = '192.168.0.103/server/';
AppRegistry.registerComponent(appName, () => App);
