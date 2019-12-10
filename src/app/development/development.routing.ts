import { Routes } from '@angular/router';
import { JavaComponent } from './java/java.component';
import { SpringComponent } from './spring/spring.component';
import { AngularComponent } from './angular/angular.component';
import { DockerComponent } from './docker/docker.component';
import { KubernetesComponent } from './kubernetes/kubernetes.component';
import { LinuxComponent } from './linux/linux.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { GcpComponent } from './gcp/gcp.component';

export const DevelopmentRoutes: Routes = [{
    path: '',
    redirectTo: 'java',
    pathMatch: 'full',
}, {
    path: '',
    children: [{
        path: 'java',
        component: JavaComponent
    }, {
        path: 'spring',
        component: SpringComponent
    }, {
        path: 'angular',
        component: AngularComponent
    }, {
        path: 'docker',
        component: DockerComponent
    }, {
        path: 'kubernetes',
        component: KubernetesComponent
    }, {
        path: 'linux',
        component: LinuxComponent
    }, {
        path: 'aws',
        component: AwsComponent
    }, {
        path: 'azure',
        component: AzureComponent
    }, {
        path: 'gcp',
        component: GcpComponent
    }]
}];