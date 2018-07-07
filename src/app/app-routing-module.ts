import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SlideComponent } from "./slide/slide.component";
import { FooterComponent } from "./footer/footer.component";
import { ServicesComponent } from "./services/services.component";
import { MyServicesComponent } from "./services/my-services/my-services.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

//Create routes here with components
const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "services", component: ServicesComponent },
    {path: "contact-us", component: ContactUsComponent},
    { path: "**", component: HomeComponent }
];

//Add Components here to export
export const routingComponents = [
    NavBarComponent,
    FeaturesComponent,
    HomeComponent,
    SlideComponent,
    FooterComponent,
    ServicesComponent,
    MyServicesComponent,
    ContactUsComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
