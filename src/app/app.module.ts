import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DecimalPipe } from '@angular/common';  // <-- Add this import

@NgModule({
  declarations: [
     // Add your components here
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // Closing parenthesis added here
    }), // Closing parenthesis for NgxEchartsModule.forRoot()
  ],
  providers: [DecimalPipe],
  bootstrap: [] // Ensure you have your main component for bootstrapping
})
export class AppModule {}  
