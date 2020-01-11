import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {       
        if (!items) return []
        if (!filter) return items
        return items.filter(item => {
            if (item.preferredBase === filter.preferredBase || item.preferredType === filter.preferredType
                || item.amount === filter.amout || item.type === filter.type) {
                return true
            }           
        })        
    }
}