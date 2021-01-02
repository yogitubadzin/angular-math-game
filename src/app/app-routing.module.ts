import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        redirectTo: "addition",
        pathMatch: "full",
    },
    {
        path: "addition",
        loadChildren: () => import("./addition/addition.module").then((m) => m.AdditionModule),
    },
    {
        path: "substraction",
        loadChildren: () => import("./substraction/substraction.module").then((m) => m.SubstractionModule),
    },
    {
        path: "multiplication",
        loadChildren: () => import("./multiplication/multiplication.module").then((m) => m.MultiplicationModule),
    },
    {
        path: "division",
        loadChildren: () => import("./division/division.module").then((m) => m.DivisionModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }