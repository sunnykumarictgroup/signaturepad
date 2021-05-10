import { NgModule } from '@angular/core';
import { SignatureProcessingComponent } from './signature-processing.component';
import { SignatureProcessingUnitComponent } from './signature-processing-unit/signature-processing-unit.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
export class SignatureProcessingModule {
}
SignatureProcessingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    FormsModule
                ],
                exports: [SignatureProcessingComponent, SignatureProcessingUnitComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXByb2Nlc3NpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2lnbmF0dXJlLXByb2Nlc3Npbmcvc3JjL2xpYi9zaWduYXR1cmUtcHJvY2Vzc2luZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUluSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBWTVDLE1BQU0sT0FBTyx5QkFBeUI7OztZQVZyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsZ0NBQWdDLENBQUM7Z0JBQzlFLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsV0FBVztpQkFFWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxnQ0FBZ0MsQ0FBQzthQUMxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWduYXR1cmVQcm9jZXNzaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduYXR1cmUtcHJvY2Vzc2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbmF0dXJlUHJvY2Vzc2luZ1VuaXRDb21wb25lbnQgfSBmcm9tICcuL3NpZ25hdHVyZS1wcm9jZXNzaW5nLXVuaXQvc2lnbmF0dXJlLXByb2Nlc3NpbmctdW5pdC5jb21wb25lbnQnO1xuXG5cblxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NpZ25hdHVyZVByb2Nlc3NpbmdDb21wb25lbnQsIFNpZ25hdHVyZVByb2Nlc3NpbmdVbml0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuXG4gIF0sXG4gIGV4cG9ydHM6IFtTaWduYXR1cmVQcm9jZXNzaW5nQ29tcG9uZW50LCBTaWduYXR1cmVQcm9jZXNzaW5nVW5pdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlUHJvY2Vzc2luZ01vZHVsZSB7IH1cbiJdfQ==