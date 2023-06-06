import {texts} from "../resources/assets";


export function getTexts(name,langCode) {
    return texts[name][langCode];
}