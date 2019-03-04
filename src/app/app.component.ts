import { Component, Input, Output, EventEmitter } from '@angular/core';

const dataConst = require('../../data/data.json');

class Item{
    name: string;
    type: string;
    children: Item[]

    constructor(_name: string, _type: string, _children: Item[]) {
        this.name = _name;
        this.type = _type;
        this.children = _children;
    }
}

@Component({
    selector: 'test-app',
    template: `<div class="panel"><h4>Test</h4><tree-view [Items]="treeData"></tree-view></div>`
})
export class AppComponent {

    treeData=dataConst.tree;
    constructor() { }
}