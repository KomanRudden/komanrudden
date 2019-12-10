import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JavaComponent } from './java/java.component';
import { SpringComponent } from './spring/spring.component';
import { AngularComponent } from './angular/angular.component';
import { DockerComponent } from './docker/docker.component';
import { KubernetesComponent } from './kubernetes/kubernetes.component';
import { LinuxComponent } from './linux/linux.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { GcpComponent } from './gcp/gcp.component';
import { DevelopmentRoutes } from './development.routing';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(DevelopmentRoutes),
        WidgetsModule
    ],
    declarations: [
        JavaComponent,
        SpringComponent,
        AngularComponent,
        DockerComponent,
        KubernetesComponent,
        LinuxComponent,
        AwsComponent,
        AzureComponent,
        GcpComponent
    ]
  })
  
  export class DevelopmentModule {}