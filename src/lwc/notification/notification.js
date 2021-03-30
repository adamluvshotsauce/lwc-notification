import { LightningElement, api } from 'lwc';

export default class Notification extends LightningElement {

    @api iconName;
    @api iconVariant;
    @api iconSize;
    @api theme;
    @api textured = false;
    @api centered = false;

    /******************
     * 
     * Getters
     * 
     *****************/

    /**
     * @description Getter property setting slds classes by notification theme
     * @return {string} Returns a css class string
     */
    get themeClass() {
        let baseClasses = 'slds-scoped-notification slds-media slds-media_center';

        switch (this.theme) {
            case 'light':
                return `${baseClasses} slds-scoped-notification_light ${this.texturedClass} ${this.centerClass}`;
            case 'dark':
                return `${baseClasses} slds-scoped-notification_dark ${this.texturedClass} ${this.centerClass}`;
            case 'info':
                return `${baseClasses} slds-theme_info ${this.texturedClass} ${this.centerClass}`;
            case 'success':
                return `${baseClasses} slds-theme_success ${this.texturedClass} ${this.centerClass}`;
            case 'warning':
                return `${baseClasses} slds-theme_warning ${this.texturedClass} ${this.centerClass}`;
            case 'error':
                return `${baseClasses} slds-theme_error ${this.texturedClass} ${this.centerClass}`;
            default:
                return `${baseClasses} slds-scoped-notification_light ${this.texturedClass} ${this.centerClass}`;
        }
    }

    /**
     * @description Getter property which returns the textured alert theme class
     * @return {string} Returns a css class string
     */
    get texturedClass() {
        return this.textured ? 'slds-theme_alert-texture' : '';
    }

    /**
     * @description Getter property which returns the text align center class
     * @return {string} Returns a css class string
     */
    get centerClass() {
        return this.centered ? 'slds-align_absolute-center' : '';
    }
}