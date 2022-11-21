import { Robot } from '../../models/robot';

export class RobotsRepository {
    public url: string;
    constructor() {
        this.url = 'https://two02210-w7ch5-alina-laurs.onrender.com/robots';
    }

    getRobots(): Promise<Array<Robot>> {
        return fetch(this.url).then((response) => response.json());
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    // read / get
    getAll(): Promise<Array<Robot>> {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw this.createError(response);
                }
                return response.json();
            })
            .then((data) => {
                return data.robots;
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    // create / post
    create(robot: Partial<Robot>): Promise<Robot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(robot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    // delete
    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }

    // uptate / patch
    update(partialRobot: Partial<Robot>): Promise<Robot> {
        return fetch(`${this.url}/${partialRobot.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialRobot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
