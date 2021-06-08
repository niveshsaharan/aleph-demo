import {ethereum, posts as postsApi} from "aleph-js";

(async function(){
    if(window.ethereum)
    {
        const account = await ethereum.from_provider(window['ethereum'])
        console.log(account);
    }

    let posts = await postsApi.get_posts('blog_pers,blog_org', {
        pagination: 20,
        page: 1
    })

    posts.posts.forEach((post, index) => {
        const tr = document.createElement('tr');
        if(index % 2 === 0)
        {
            tr.className = 'bg-white'
        }
        else{
            tr.className = 'bg-gray-50';
        }

        tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            ${post.content.title}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${post.content.subtitle}
        </td>
        `;
        document.querySelector('#posts tbody').appendChild(tr)
    })
})()

