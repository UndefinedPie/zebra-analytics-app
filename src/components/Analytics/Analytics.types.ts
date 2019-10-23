import { IGoal } from '../../containers/App/App.types';

export interface IAnalyticsProps {
  data: {
    counter: string;
    dateFrom: string;
    dateTo: string;
    // lang: string;
    reportName: string;
    token: string;
    goals: IGoal[];
  };
}
