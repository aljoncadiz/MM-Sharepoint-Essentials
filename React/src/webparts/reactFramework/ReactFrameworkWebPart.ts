import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactFrameworkWebPartStrings';
import ReactFramework from './components/ReactFramework';
import { IReactFrameworkProps } from './components/IReactFrameworkProps';

export interface IReactFrameworkWebPartProps {
  description: string;
}

export default class ReactFrameworkWebPart extends BaseClientSideWebPart<IReactFrameworkWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactFrameworkProps > = React.createElement(
      ReactFramework,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
