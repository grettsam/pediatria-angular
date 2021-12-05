import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/comun/navbar/navbar.component';
import { GeneralComponent } from './components/comun/general/general.component';
import { FooterComponent } from './components/comun/footer/footer.component';
import { SearchComponent } from './components/comun/search/search.component';
import { HomeComponent } from './components/pagina/home/home.component';

import { BroncopulmonarComponent } from './components/pagina/broncopulmonar/broncopulmonar.component';
import { CardiologiaComponent } from './components/pagina/cardiologia/cardiologia.component';
import { EndocrinologiaComponent } from './components/pagina/endocrinologia/endocrinologia.component';
import { GastroenterologiaComponent } from './components/pagina/gastroenterologia/gastroenterologia.component';
import { GeneticaComponent } from './components/pagina/genetica/genetica.component';
import { InfectologiaComponent } from './components/pagina/infectologia/infectologia.component';
import { InmunologiaYReumatologiaComponent } from './components/pagina/inmunologia-y-reumatologia/inmunologia-y-reumatologia.component';
import { NefrologiaComponent } from './components/pagina/nefrologia/nefrologia.component';
import { NeurologiaComponent } from './components/pagina/neurologia/neurologia.component';
import { NutricionComponent } from './components/pagina/nutricion/nutricion.component';
import { PsiquiatriaComponent } from './components/pagina/psiquiatria/psiquiatria.component';
import { ParticularComponent } from './components/comun/particular/particular.component';
import { OxigenoterapiaComponent } from './components/pagina/broncopulmonar/oxigenoterapia/oxigenoterapia.component';
import { BronquiolitisComponent } from './components/pagina/broncopulmonar/bronquiolitis/bronquiolitis.component';
import { AsmaBronquialComponent } from './components/pagina/broncopulmonar/asma-bronquial/asma-bronquial.component';
import { NeumoniaComplicadaComponent } from './components/pagina/broncopulmonar/neumonia-complicada/neumonia-complicada.component';
import { NeumoniaRecurrenteComponent } from './components/pagina/broncopulmonar/neumonia-recurrente/neumonia-recurrente.component';
import { FibrosisQuisticaComponent } from './components/pagina/broncopulmonar/fibrosis-quistica/fibrosis-quistica.component';
import { AlteBrueComponent } from './components/pagina/broncopulmonar/alte-brue/alte-brue.component';
import { SearchPageComponent } from './components/pagina/search-page/search-page.component';
import { ElectrocardiogramaPediatricaComponent } from './components/pagina/cardiologia/electrocardiograma-pediatrica/electrocardiograma-pediatrica.component';
import { CardiopatiasCongenitasComponent } from './components/pagina/cardiologia/cardiopatias-congenitas/cardiopatias-congenitas.component';
import { InsuficienciaCardiacaComponent } from './components/pagina/cardiologia/insuficiencia-cardiaca/insuficiencia-cardiaca.component';
import { ShockCardiogenicoComponent } from './components/pagina/cardiologia/shock-cardiogenico/shock-cardiogenico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    BroncopulmonarComponent,
    CardiologiaComponent,
    EndocrinologiaComponent,
    GastroenterologiaComponent,
    GeneticaComponent,
    InfectologiaComponent,
    InmunologiaYReumatologiaComponent,
    NefrologiaComponent,
    NeurologiaComponent,
    NutricionComponent,
    PsiquiatriaComponent,
    ParticularComponent,
    OxigenoterapiaComponent,
    BronquiolitisComponent,
    AsmaBronquialComponent,
    NeumoniaComplicadaComponent,
    NeumoniaRecurrenteComponent,
    FibrosisQuisticaComponent,
    AlteBrueComponent,
    SearchPageComponent,
    ElectrocardiogramaPediatricaComponent,
    CardiopatiasCongenitasComponent,
    InsuficienciaCardiacaComponent,
    ShockCardiogenicoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
