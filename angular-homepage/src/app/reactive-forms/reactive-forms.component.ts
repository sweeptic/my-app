import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
    selector: 'app-reactive-forms',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
    editor: EditorType = 'name';

    get showNameEditor() {
        return this.editor === 'name';
    }

    get showProfileEditor() {
        return this.editor === 'profile';
    }

    toggleEditor(type: EditorType) {
        this.editor = type;
    }
}
