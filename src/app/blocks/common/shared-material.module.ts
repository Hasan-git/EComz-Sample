import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        // Material
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
    ],
    exports: [
        // Material
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,

    ]
})
export class SharedMaterialModule { }
