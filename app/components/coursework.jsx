'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {useEffect, useState} from 'react';

export default function CourseWork() {

    const [items, setItems] = useState([]);
    const [subItems, setSubItems] = useState({});
    const [error, setError] = useState(null);


    useEffect(() => {
        getFiles();
    }, []);

    const getFiles = (currentFolder) => {
        let uri = currentFolder ? `/api/listFiles?folder=${encodeURIComponent(currentFolder)}`
            : '/api/listFiles'
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                console.log('Data', data)
                if (currentFolder) {
                    setSubItems(prevState => ({
                        ...prevState,
                        [currentFolder]: data.items?.filter((item) => item.name !== currentFolder + '/')
                            .map(item => ({...item, name: item.name.split(currentFolder + '/')[1]}))
                    }));
                } else {
                    setItems(data.items ?? [])
                }
            })
            .catch((err) => setError('Failed to fetch S3 files'));
    }

    const getFoldersUI = (folder) => {
        if (folder.isFolder) {
            return (
                <Accordion type="single" collapsible className="w-full bg-gray-50 px-4">
                    <AccordionItem value={folder.path} onClick={() => getFiles(folder.name)}>
                        <AccordionTrigger>📂 {folder.name}</AccordionTrigger>
                        <AccordionContent>
                            {subItems[folder.name]?.length > 0 ? subItems[folder.name]?.map(subItems => getFoldersUI(subItems)) : "empty folder"}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
        }
        return (
            <Accordion className="w-full bg-gray-50 px-4">
                <AccordionItem value={folder.name}>
                    <AccordionTrigger>
                        <a href={folder.url} target="_blank">📝 {folder.name}</a>
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>
        )
    }
    return (
        <section id="coursework" className="px-4 py-8">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Coursework</h2>

                {items.map((item, index) => getFoldersUI(item))}

            </div>
        </section>
    )
}