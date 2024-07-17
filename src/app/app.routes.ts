import { Routes } from '@angular/router';
import { InicioComponent } from '@components/inicio/inicio.component';
import { LoginComponent } from '@components/login/login.component';
import { NpsComponent } from '@components/nps/nps.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'nps', component: InicioComponent},
    {path: 'calificarNPS', component: NpsComponent}
];
