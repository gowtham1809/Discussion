'use client';

import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input
        name="term"
        defaultValue={searchParams.get("term") || ""}
        placeholder="Search..."
        endContent={
          <button type="submit" className="cursor-pointer">
            <SearchOutlined />
          </button>
        }
      />
    </form>
  );
}
