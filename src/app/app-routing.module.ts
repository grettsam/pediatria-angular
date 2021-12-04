import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/comun/search/search.component';
import { AlteBrueComponent } from './components/pagina/broncopulmonar/alte-brue/alte-brue.component';
import { AsmaBronquialComponent } from './components/pagina/broncopulmonar/asma-bronquial/asma-bronquial.component';
import { BroncopulmonarComponent } from './components/pagina/broncopulmonar/broncopulmonar.component';
import { BronquiolitisComponent } from './components/pagina/broncopulmonar/bronquiolitis/bronquiolitis.component';
import { FibrosisQuisticaComponent } from './components/pagina/broncopulmonar/fibrosis-quistica/fibrosis-quistica.component';
import { NeumoniaComplicadaComponent } from './components/pagina/broncopulmonar/neumonia-complicada/neumonia-complicada.component';
import { NeumoniaRecurrenteComponent } from './components/pagina/broncopulmonar/neumonia-recurrente/neumonia-recurrente.component';
import { OxigenoterapiaComponent } from './components/pagina/broncopulmonar/oxigenoterapia/oxigenoterapia.component';
import { CardiologiaComponent } from './components/pagina/cardiologia/cardiologia.component';
import { EndocrinologiaComponent } from './components/pagina/endocrinologia/endocrinologia.component';
import { GastroenterologiaComponent } from './components/pagina/gastroenterologia/gastroenterologia.component';
import { GeneticaComponent } from './components/pagina/genetica/genetica.component';
import { HomeComponent } from './components/pagina/home/home.component';
import { InfectologiaComponent } from './components/pagina/infectologia/infectologia.component';
import { InmunologiaYReumatologiaComponent } from './components/pagina/inmunologia-y-reumatologia/inmunologia-y-reumatologia.component';
import { NefrologiaComponent } from './components/pagina/nefrologia/nefrologia.component';
import { NeurologiaComponent } from './components/pagina/neurologia/neurologia.component';
import { NutricionComponent } from './components/pagina/nutricion/nutricion.component';
import { PsiquiatriaComponent } from './components/pagina/psiquiatria/psiquiatria.component';
import { SearchPageComponent } from './components/pagina/search-page/search-page.component';

const routes: Routes = [
  {
    path: 'broncopulmonar',
    component: BroncopulmonarComponent,
    children: [
      {
        path: 'oxigenoterapia',
        component: OxigenoterapiaComponent,
      },
      {
        path: 'bronquiolitis',
        component: BronquiolitisComponent,
      },
      {
        path: 'asma-bronquial',
        component: AsmaBronquialComponent,
      },
      {
        path: 'neumonia-complicada',
        component: NeumoniaComplicadaComponent,
      },
      {
        path: 'neumonia-recurrente',
        component: NeumoniaRecurrenteComponent,
      },
      {
        path: 'fibrosis-quistica',
        component: FibrosisQuisticaComponent,
      },
      {
        path: 'alte-brue',
        component: AlteBrueComponent,
      },
    ],
  },
  { path: 'cardiologia', component: CardiologiaComponent },
  { path: 'endocrinologia', component: EndocrinologiaComponent },
  { path: 'gastroenterologia', component: GastroenterologiaComponent },
  { path: 'genetica', component: GeneticaComponent },
  { path: 'infectologia', component: InfectologiaComponent },
  {
    path: 'inmunologia-y-reumatologia',
    component: InmunologiaYReumatologiaComponent,
  },
  { path: 'nefrologia', component: NefrologiaComponent },
  { path: 'neurologia', component: NeurologiaComponent },
  { path: 'nutricion', component: NutricionComponent },
  { path: 'psiquiatria', component: PsiquiatriaComponent },
  { path: 'search/:elemento', component: SearchPageComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
