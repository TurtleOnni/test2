import { Component, Input, Output, EventEmitter } from '@angular/core';

class Item{
    name: string;
    type: string;
    isExpanded: boolean;
    children: Item[]

    constructor(_name: string, _type: string, _children: Item[]) {

        this.name = _name;
        this.type = _type;
        this.isExpanded = false;
        this.children = _children;
    }
}

@Component({
    selector: 'tree-view',
    template: `<ul>
                <li *ngFor="let item of Items| orderBy:name">
                        <input type="checkbox" class="chControl" checked="item.isOpen"
                               *ngIf="item.type==='folder' && item.children!=='undefined' && item.children.length!==0">
                        <span title="{{item.type}}">
			            {{item.name}} 
		                </span>
                    <span *ngIf="item.children!==undefined">({{item.children.length}})</span>
                    <div class="isOpen">
                        <tree-view [Items]="item.children" *ngIf="item.children!=='undefined'"></tree-view>
                    </div>
                </li>
    </ul>`,
    styles:['input[type=checkbox].chControl:checked ~ div.isOpen{ display:block } .isOpen {display: none}'],
})
export class TreeComponent {
    @Input() Items: Item[];

    constructor() { }

}
