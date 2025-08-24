import { type KeyboardEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import { SearchInput } from "@/shared/ui";

const FormSchema = z.object({
  search: z.string(),
});

export default function HeaderGlobalSearch() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="search"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SearchInput {...field} onKeyDown={handleKeyDown} />
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  );
}
