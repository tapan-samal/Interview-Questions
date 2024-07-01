//TypeScript
     // Boolean
     let isActive: boolean = true;

     // Number
     let age: number = 30;

     // String
     let title: string = "Manager";
     
      // Array
      let scores: number[] = [85, 90, 78];
      // or use a compact form: let scores: Array<number> = [85, 90, 78];
      
      // Tuple
      let employee: [string, number, boolean] = ['John', 35, true];

      // Enum
      enum WeekDays { Monday, Tuesday, Wednesday, Thursday, Friday }
      let today: WeekDays = WeekDays.Wednesday;

      // Any
      let dynamicData: any = 20;
      dynamicData = "string";

      // Void
      function greet(): void {
        console.log("Hello!");
      }

      // Null and Undefined
      let data: null = null;
      let user: undefined = undefined;

      // Never
      function errorMessage(message: string): never {
        throw new Error(message);
      }

      // Object
      let person: object = {
        name: 'John',
        age: 30
      };

      // Function
      let calculate: Function;
      calculate = function (x: number, y: number): number {
        return x + y;
      };

