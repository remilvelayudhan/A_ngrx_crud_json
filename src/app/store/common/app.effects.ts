import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyaction, showalert } from "./app.action";
import { exhaustMap, map } from "rxjs";


@Injectable()

export class AppEffects {
    constructor(private $action: Actions,
        private _snackBar: MatSnackBar) { }


    _showalert = createEffect(() =>
        this.$action.pipe(
            ofType(showalert),
            exhaustMap((action) => {
                
                return this.Shownackbaralert(action.message, action.resulttype).afterDismissed().pipe(
                    map(() => {
                        return emptyaction();
                    })
                )
            })
        )
    )


    Shownackbaralert(message: string, resulttype: string = 'fail') {
        debugger;
        let _class = resulttype == 'pass' ? 'green-snackbar' : 'red-snackbar';
        return this._snackBar.open(message, 'ok', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 3000,
            panelClass: [_class]
        })
    }


}