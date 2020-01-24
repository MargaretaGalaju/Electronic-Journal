


import {Request, Response} from 'express';
import {STUDENTS} from "./db-data";
import {setTimeout} from "timers";



export function searchLessons(req: Request, res: Response) {

    const queryParams = req.query;

    const courseId = queryParams.courseId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);

    let lessons = Object.values(STUDENTS).filter(lesson => lesson.courseId == courseId).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
       lessons = lessons.filter(student => student.name.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: lessonsPage});
    },1000);


}