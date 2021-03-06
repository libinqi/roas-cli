import 'reflect-metadata';

export function Service() {
    return (target, propertyKey: string): void => {
        let c = Reflect.getMetadata('design:type', target, propertyKey);
        target[propertyKey] = new c();
        Reflect.defineMetadata('custom:metaData', 'service', target, propertyKey);
    };
}