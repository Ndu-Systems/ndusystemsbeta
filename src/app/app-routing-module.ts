import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SlideComponent } from "./slide/slide.component";

//Create routes here with components
const routes: Routes = [
    { path: "", component: HomeComponent }
];

//Add Components here to export
export const routingComponents = [
    NavBarComponent,
    FeaturesComponent,
    HomeComponent,
    SlideComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
