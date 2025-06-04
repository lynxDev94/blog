import fs from "fs";
import path from "path";
import matter from "gray-matter";

//  first we get all the files from dir
function getMDXfiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
//  then we read the data 
function readMdxFile(filePath: fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return matter(rawContent);
}
//  present mdx with metaData
function getMDXData(dir: string){
    let mdxFiles = getMDXfiles(dir);
    return mdxFiles.map((file) => {
        let {data: metaData, content} = readMdxFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));
        return {
            metaData,
            slug,
            content
        }
    })
}


export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(),'src','app','blog','contents'));
}
