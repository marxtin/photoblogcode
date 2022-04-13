import { createGlobalStyle } from 'styled-components';

import BungeeWoff from './Bungee-Regular.woff';
import BungeeWoff2 from './Bungee-Regular.woff2';
import StaatlichesWoff from './Staatliches-Regular.woff';
import StaatlichesWoff2 from './Staatliches-Regular.woff2';
import TurretRoadWoff from './TurretRoad-Bold.woff';
import TurretRoadWoff2 from './TurretRoad-Bold.woff2';



export default createGlobalStyle`
    @font-face {
        font-family: 'Bungee';
        src: local('Bungee'), local('Bungee'),
        url(${BungeeWoff2}) format('woff2'),
        url(${BungeeWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'TurretRoad';
        src: local('TurretRoad'), local('TurretRoad'),
        url(${TurretRoadWoff2}) format('woff2'),
        url(${TurretRoadWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Staatliches';
        src: local('Staatliches'), local('Staatliches'),
        url(${StaatlichesWoff2}) format('woff2'),
        url(${StaatlichesWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;