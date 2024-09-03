'use client';

import { cloneElement, PropsWithChildren, useState, ReactElement } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Button, Input } from '@/components/ui';

// Define the props for the ClientSearch component using generics
type ClientSearchProps<T> = PropsWithChildren & {
  data: T[];
  searchKey: keyof T;
  Content: ReactElement;
};

const ClientSearch = <T,>({
  data,
  searchKey,
  Content,
}: ClientSearchProps<T>) => {
  const [query, setQuery] = useState<string>('');

  // Determine if the query is not empty
  const isFiltered = query.length > 0;

  // Filter the data based on the query
  const filtered = data.filter(item =>
    item?.[searchKey]?.toString().toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            className='h-8 px-2 lg:px-3'
            onClick={() => setQuery('')}
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      {/* Clone content and pass the filtered data */}
      {cloneElement(Content, { data: filtered })}
    </div>
  );
};

export default ClientSearch;
