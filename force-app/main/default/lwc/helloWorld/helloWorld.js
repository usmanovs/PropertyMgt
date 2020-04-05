/**
 * Created by susmanov on 4/4/20.
 */

import {LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'Hello';
    changeHandler(event){
        this.greeting = event.target.value;

    }

}