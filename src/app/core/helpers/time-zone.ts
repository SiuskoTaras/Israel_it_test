import * as moment from 'moment';

export class ConvertDate {
  public static avoid(date): any {
    console.log(date);
    if (!date) {
      return date;
    }
    const convertedDate = moment.parseZone(new Date(date)).format('YYYY-MM-DD');
    return convertedDate;
  }

  public static createDateObject(date): any {
    const convertedDate = new Date(moment.parseZone(date).format('YYYY-MM-DD').replace(/-/g, '/'));
    return convertedDate;
  }
}
