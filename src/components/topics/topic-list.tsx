import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();
  const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;
  const renderedTopics = topics.map((topic) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color={color} variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
