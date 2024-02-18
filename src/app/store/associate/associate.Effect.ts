import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/services/associate/associate.service";
import { addAssociate, addAssociateSuccess, deleteAssociate, deleteAssociateSuccess, getassociate, getassociatesuccess, loadAssociate, loadAssociateFail, loadAssociateSuccess, updateassociate, updateassociatesuccess } from "./associate.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../common/app.action";


@Injectable()

export class AssociateEffect {
    constructor(private action$: Actions, private associateService: AssociateService) { }


    _loadAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(loadAssociate),
            exhaustMap((action) => {
                return this.associateService.GetAll().pipe(
                    map((data) => {
                        return loadAssociateSuccess({ list: data })
                    }),
                    catchError((_error) => of(loadAssociateFail({ errormessage: _error.message })))
                )
            })
        )
    )

    _addAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(addAssociate),
            switchMap((action) => {
                return this.associateService.Create(action.associateObj).pipe(
                    switchMap((data) => {
                        return of(addAssociateSuccess({ associateObj: action.associateObj }),
                            showalert({ message: 'Created successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to create associate', resulttype: 'fail' })))
                )

            })
        )

    )


    _deleteAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(deleteAssociate),
            switchMap((action) => {
                return this.associateService.Delete(action.id).pipe(
                    switchMap((data) => {
                        return of(deleteAssociateSuccess({ id: action.id }),
                            showalert({ message: 'delete successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to delete associate', resulttype: 'fail' })))
                )

            })
        )
    )



    _getAssociate = createEffect(() =>
    this.action$.pipe(
        ofType(getassociate),
        switchMap((action) => {
            return this.associateService.Getbycode(action.id).pipe(
                switchMap((data) => {
                    return of(getassociatesuccess({ obj: data }))
                }),
                catchError((_error) => of(showalert({ message: 'Failed to get associate', resulttype: 'fail' })))
            )

        })
    )
)


_updateassociate = createEffect(() =>
this.action$.pipe(
    ofType(updateassociate),
    switchMap((action) => {
        return this.associateService.Update(action.inputdata).pipe(
            switchMap((data) => {
                return of(updateassociatesuccess({ inputdata: action.inputdata }),
                    showalert({ message: 'Upadted successfully.', resulttype: 'pass' }))
            }),
            catchError((_error) => of(showalert({ message: 'Failed to update associate', resulttype: 'fail' })))
        )
    })
)
)
}