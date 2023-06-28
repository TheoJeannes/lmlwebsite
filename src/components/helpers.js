import {texts} from "../resources/assets";


export function getTexts(name, langCode) {
    return texts[name][langCode];
}

export function getDisplayType() {
    if (window === undefined) {
        return 'PC';
    }
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = width / height;
    console.log("W", width, " - H", height, " - R", ratio)
    if (width <= 1200 && width > height && ratio >= 16 / 9) {
        return 'Mobile Landscape';
    }
    if (height <= 1200 && height > width && ratio <= 9 / 16) {
        return 'Mobile Portrait';
    }
    if (width <= 1200 && height > width && ratio > 9 / 16) {
        return 'Tablet Portrait';
    }
    if (height <= 1200 && width > height && ratio < 16 / 9) {
        return 'Tablet Landscape';
    }
    return 'PC';
}

//
// /*Tel Paysage*/
// @media (min-aspect-ratio: 16/9) and (max-width: 1200px) and (orientation: landscape)
//
// /*Tel Portrait*/
// @media (max-aspect-ratio: 9/16) and (max-height: 1200px) and (orientation: portrait)
//
// /*Tablette*/
// @media (max-width: 1200px) and (min-aspect-ratio: 9.01/16) and (orientation: portrait)