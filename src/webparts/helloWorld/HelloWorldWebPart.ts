import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
 import IndForm from './IndForm';
import Test from './Test'


export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render() {

    const ele = React.createElement(IndForm)

    ReactDom.render(ele, this.domElement)
    // this.domElement.innerHTML = `
    //   <div class="${ styles.helloWorld }">

    //     <div class="${ styles.container }">
    //       <div class="${ styles.row }">
    //         <div class="${ styles.column }">
    //           <span class="${ styles.title }">Welcome to SharePoint!</span>
    //           <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    //           <p class="${ styles.description }">${escape(this.properties.description)}</p>
    //           <a href="https://aka.ms/spfx" class="${ styles.button }">
    //             <span class="${ styles.label }">Learn more</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`;

    // return (this.domElement.innerHTML = `Ind`);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
