import { Pipe , PipeTransform} from "@angular/core";

@Pipe({
    name:"ConvertToSpace"
})
export class ConvertToSpace implements PipeTransform{
    transform(value: string , char:string) {
        return value.replace(char , ' ');
    }

}