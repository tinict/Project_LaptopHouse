"use strict";

import { newElement } from "../../../Lib/VieStar/Core.js";
import { Avatar } from "../../Components/Avatar.js";
import { NavigationBar } from "../../Components/NavigationBar.js";
import { Search } from "../../Components/Search.js";

export const Header = () => {
    return newElement`
        <header class="mod_header">
            <div class="header__container">
                <div class="header__left">
                <div class='icon'>
                    <i class="fas fa-bars"></i>
                </div>
                    <div class="header__brand">
                        <img src="assets/img/logo_laptop-home.png" alt="logo company">
                    </div>
                </div>
                <div class="header__center">
                    <div class="header__brand">
                        <img src="assets/img/logo_laptop-home.png" alt="logo company">
                    </div>
                    ${Search()}
                    ${NavigationBar()}
                </div>
                <div class="header__right">
                    ${Avatar()}
                </div>
            </div>
        </header>
    `
};

export const SubHeader = () => {
    return `
        <div class="sub_header">
            ${Search()}
        </div>
    `;
};