import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    StudentCreateComponent,
    LoaderComponent,
    StudentPageComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule// Include FormsModule for ngModel usage
  ],
  providers: [
    // If you are using Angular Universal for server-side rendering (SSR), you might use provideClientHydration(), but it's not typically needed in most applications.
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
