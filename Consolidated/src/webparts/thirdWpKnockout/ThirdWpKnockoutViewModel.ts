import * as ko from 'knockout';
import styles from './ThirdWpKnockout.module.scss';
import { IThirdWpKnockoutWebPartProps } from './ThirdWpKnockoutWebPart';

export interface IThirdWpKnockoutBindingContext extends IThirdWpKnockoutWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class ThirdWpKnockoutViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public thirdWpKnockoutClass: string = styles.thirdWpKnockout;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IThirdWpKnockoutBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
