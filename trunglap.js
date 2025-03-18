document.getElementById('processLinks').addEventListener('click', function() {
    let inputLinks = document.getElementById('inputLinks').value;
    let lines = inputLinks.split('\n');
    let uniqueLines = [...new Set(lines)];
    document.getElementById('outputLinks').value = uniqueLines.join('\n');
});

document.getElementById('processContent').addEventListener('click', function() {
    let inputContent = document.getElementById('inputContent').value;
    let lines = inputContent.split('\n');
    let processedLines = lines.map(line => {
        // Tách link ra khỏi dòng
        let parts = line.split(/(\s+)/); // Tách theo khoảng trắng
        let link = "";
        let content = line;

        for (let part of parts) {
            if (part.startsWith('http://') || part.startsWith('https://')) {
                link = part;
                content = content.replace(part, '').trim(); // Loại bỏ link khỏi nội dung
                break; // Tìm thấy link, dừng vòng lặp
            }
        }
        return { link: link, content: content };
    });

    // Lọc trùng lặp dựa trên nội dung
    let uniqueContent = [];
    let seenContent = new Set();
    processedLines.forEach(item => {
        if (!seenContent.has(item.content)) {
            uniqueContent.push(item);
            seenContent.add(item.content);
        }
    });

    // Hiển thị kết quả
    let filteredLinks = uniqueContent.map(item => item.link).join('\n');
    let filteredContent = uniqueContent.map(item => item.content).join('\n');

    document.getElementById('outputLinks').value = filteredLinks;
    document.getElementById('outputContent').value = filteredContent;
});
