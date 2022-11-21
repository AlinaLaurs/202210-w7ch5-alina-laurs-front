import { RobotsRepository } from './robotsRepository';

const robotMock = {
    id: '3',
    image: 'url',
    name: 'Patri',
    speed: 10,
    strength: 10,
    creationDate: '12.05.1994',
};

describe('Given RobotsRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: RobotsRepository;
        beforeEach(() => {
            service = new RobotsRepository(); // Llama al constructor, construye el repositorio.
        });

        test('Then if I use service.error(), it should return an error', () => {
            // Llamo a createError, se crea un error.
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            // Aquí creo un error.
            const result = new Error('Error 400: error'); // Así es como tiene que ser el error.
            result.name = 'HTTPError';
            expect(error).toEqual(result); // Aquí los comparo.
        });

        // get
        test(`Then if I use service.getRobots() 
            it should return a Promise of an Array of Robots`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getRobots();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        // getAll
        test(`Then if I use service.getAll() 
            it should return a Promise of an Array of Robots`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getAll() 
            it should not return a Promise of an Array of Robots`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAll();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // create / post
        test(`Then if I use service.create()
                it should return a Promise of the created Robot`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(robotMock),
            });
            const result = await service.create(robotMock);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(robotMock);
        });
        test(`Then if I use service.create()
                it should not return a Promise of the created Robot`, async () => {
            const partialMock = {
                name: 'Curro',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.create(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // delete
        test(`Then if I use service.delete()
                it should return a Promise of the deleted Robot`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                robotMock,
            });
            const result = await service.delete(robotMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then if I use service.delete()
                it should not return a Promise of the deleted Robot`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.delete(robotMock.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        // update / patch
        test(`Then if I use service.update()
                it should return a Promise of the updated Robot`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(robotMock),
            });
            const result = await service.update(robotMock);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(robotMock);
        });
        test(`Then if I use service.update()
                it should not return a Promise of the updated Robot`, async () => {
            const partialMock = {
                name: 'Pepe',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.update(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });
});
