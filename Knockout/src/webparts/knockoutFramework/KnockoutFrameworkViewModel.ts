import * as ko from 'knockout';
import styles from './KnockoutFramework.module.scss';
import { IKnockoutFrameworkWebPartProps } from './KnockoutFrameworkWebPart';

export interface IKnockoutFrameworkBindingContext extends IKnockoutFrameworkWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class KnockoutFrameworkViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public knockoutFrameworkClass: string = styles.knockoutFramework;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IKnockoutFrameworkBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
