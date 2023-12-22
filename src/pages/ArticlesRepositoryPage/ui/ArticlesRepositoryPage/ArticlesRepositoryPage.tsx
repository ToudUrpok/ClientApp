import { memo, useState } from 'react'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticlesRepositoryPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticlesCollection, IArticle, TArticlesCollectionView } from '../../../../entities/Article'

interface ArticlesRepositoryPageProps {
    className?: string
}

const mockedArticles: IArticle[] = [
    {
        id: '1',
        title: 'Javascript news 2022',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Eugene Yakubovich',
            role: 'user',
            avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
        },
        topic: [
            'IT',
            'Education',
            'Economics',
            'Science'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
                    ]
                }
            },
            {
                id: '4',
                type: 'CODE',
                content: {
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
                }
            },
            {
                id: '2',
                type: 'IMAGE',
                content: {
                    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    title: 'Рисунок 1 - скриншот сайта'
                }
            }
        ]
    },
    {
        id: '2',
        title: 'Как выбрать вкусный сорт кофе?',
        subtitle: 'Где выращивают кофе? Как его подготавливают к употреблению? И многое другое.',
        img: 'https://thumbs.dreamstime.com/b/coffee-beans-world-drink-map-73670855.jpg',
        views: 1017,
        createdAt: '27.11.2023',
        user: {
            id: '2',
            username: 'Michail Yakubovich',
            role: 'admin',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/800px-Vladimir_Lenin.jpg'
        },
        topic: [
            'Food',
            'Shopping'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Как выбрать кофе: кратко',
                    paragraphs: [
                        'Краткая инструкция, как выбрать кофе:',
                        '1. Оцениваете внешний вид зёрен: они должны быть ровными, без налёта и обязательно цельными.',
                        '2. Запах должен быть ярко выраженным кофейным. Если есть ощущение примесей, откажитесь от этих зёрен.',
                        '3. Обращайте внимание на срок обжарки. Вкусный кофе можно приготовить только из зерна, которое было обжарено не больше месяца назад.',
                        '4. Получите базовые знания о виде любимого напитка (не путать с сортом!): каким должен быть размер, внешний вид, чем отличается от других. Так вам будет сложно предложить подделку.',
                        '5. И наконец, пробуйте кофе разных поставщиков, разных видов и разной обжарки, доверяйте своим рецепторам, а не тому, что рекомендуют другие.'
                    ]
                }
            },
            {
                id: '2',
                type: 'IMAGE',
                content: {
                    src: 'https://www.fao.org/3/ae939e/ae939e2v.jpg',
                    title: 'Рисунок 1 - скриншот сайта'
                }
            },
            {
                id: '4',
                type: 'CODE',
                content: {
                    code: 'Натуральный\n  - Зерно сушится вместе с кожурой. Долгое время считалось устаревшим и немодным способом. Сейчас переживает второе рождение.\nПолумытый\n    - Зерно лишь наполовину очищается. Высушивается с оставшейся частью. Кожура не отдаёт сладость, поэтому вкус такого зерна более чистый, чем при натуральной обработке.\nГилинг-басах\n    - Зерно сразу очищается от ягоды, остаётся только пачмент, который удаляется на последнем этапе. При этом способе важно, как впоследствии хранится зерно.\nАнаэробный\n  - Метод обработки, при котором кофе ферментируют в герметичных контейнерах без доступа кислорода. В пластиковых бочках, стальных резервуарах или мешках грейн-про.'
                }
            }
        ]
    }
]

const ArticlesRepositoryPage = (props: ArticlesRepositoryPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('articles')
    const [view/* , setView */] = useState<TArticlesCollectionView>()

    return (
        <div className={cn(cls.ArticlesRepositoryPage, {}, [className])}>
            { t('articles.ArticlesRepositoryPage') }
            <ArticlesCollection
                className={cls.Collection}
                articles={
                    new Array(16)
                        .fill(0)
                        .map((item, index) => ({
                            ...mockedArticles[index % mockedArticles.length],
                            id: String(index + 1)
                        }))
                }
                view={view}
            />
        </div>
    )
}

export default memo(ArticlesRepositoryPage)
